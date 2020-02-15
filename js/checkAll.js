//插件：就是给jQuery对象增加方法（函数）
jQuery.fn.extend({
    
    checkAll:function($sonCheckbox){
        // this:是checkAll函数的所属对象 ，$("#checkallid")
        $sonCheckbox.prop("checked",this.prop("checked"));
    },    
    bindLeaderCHK:function($leaderCHK){
        //this:是bindLeaderCHK函数所属的对象
        let isAll = true;//假定全部选中
        this.each(function(){
            //this:是循环过程中的当前元素（dom元素）
            if(!$(this).prop("checked")){
                isAll = false;
            }
        });
        $leaderCHK.prop("checked",isAll);
    },

    unCheck:function($leaderCHK){
        // this:
        this.each(function(){
            this.checked = !this.checked;
        });
        this.bindLeaderCHK($leaderCHK);
    },

    bindCheck:function($sonCheckbox,$unBtn){
        let $leaderCHK = this;
        $leaderCHK.click(function(){        
            $leaderCHK.checkAll($sonCheckbox);
        });
        $sonCheckbox.click(function(){
            $sonCheckbox.bindLeaderCHK($leaderCHK);
        });
        if($unBtn){
            $unBtn.click(function(){
                $sonCheckbox.unCheck($leaderCHK);
            });
        }
    }
});
