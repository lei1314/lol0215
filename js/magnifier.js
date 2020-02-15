//放大镜

    class Mirror{
        constructor(boxDom,obj){
            this.boxDom = boxDom;
            this.mirrorBox = null;
            this.showBox = null;
            let defaultObj = {
                img:"",
                width:120,
                height:90,
                color:"pink",
                opacity:0.5,
                multiple:2,
         
            } 
            for(let key in defaultObj){
                this[key] = obj[key]==undefined?defaultObj[key]:obj[key];
            }
            this.render();
            this.addEvent();
        }
    
        //创建dom
        render(){
            this.boxDom.style.position= "relative";
            //放大镜
            this.mirrorBox = document.createElement("div");
            this.mirrorBox.style.cssText=`
                    position: absolute;
                    width: ${this.width}px;
                    height: ${this.height}px;
                    background-color: ${this.color};
                    opacity: ${this.opacity};
                    display:none;
                    
            `;
            this.boxDom.appendChild(this.mirrorBox);
    
            //显示的效果
            this.showBox =document.createElement("div");
            this.showBox.style.cssText=`
                position: absolute;
                left:${this.boxDom.offsetWidth+50}px;
                top:0px;
                width: ${this.width*this.multiple}px;
                height: ${this.height*this.multiple}px;
                background-image: url(${this.img});
                background-size: ${this.boxDom.offsetWidth*this.multiple}px  ${this.boxDom.offsetHeight*this.multiple}px;
                display:none;
                z-index:800
            `;
            this.boxDom.appendChild(this.showBox);
        }
    
        //绑定事件
        addEvent(){   
            this.boxDom.onmouseenter = ()=>{
                this.mirrorBox.style.display = "block";
                this.showBox.style.display = "block";
            }
            
            this.boxDom.onmouseleave = ()=>{
                this.mirrorBox.style.display = "none";
                this.showBox.style.display = "none";
            }
            
            // let tempLeft = this.boxDom.offsetLeft+this.width/2;
            // let tempTop = this.boxDom.offsetTop+this.height/2;
            let pos = position(this.boxDom);
            console.log(pos);
            let tempLeft = pos.left+this.width/2;
            let tempTop = pos.top+this.height/2;
    
            let diffWidth = this.boxDom.offsetWidth-this.width;
            let diffHeight = this.boxDom.offsetHeight-this.height;
    
            this.boxDom.onmousemove = (event)=>{
                let evt = event || window.event;
                //一、数据处理
                //1、
                let left1 = evt.pageX-tempLeft;
                let top1 = evt.pageY-tempTop;
    
                //2、边界处理
                if(left1<0){
                    left1=0;
                }else if(left1>diffWidth){
                    left1=diffWidth;
                }
                
                if(top1<0){
                    top1=0
                }else if(top1>diffHeight){
                    top1=diffHeight;
                }
    
                //二、外观
                this.mirrorBox.style.left = left1+"px";
                this.mirrorBox.style.top = top1+"px";
                this.showBox.style.backgroundPosition=`-${left1*this.multiple}px -${top1*this.multiple}px`;
            }
        }
    }

