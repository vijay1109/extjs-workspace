Ext.define('Rest.login.LoginController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.login',
    onClickLogin : function(){
        var me     = this,
            view   = me.getView(),
            ref    = me.getReferences();
            
        if(ref.username.value=="admin" && ref.password.value=="12345678"){
            view.close();
            Ext.widget('viewport',{
                layout : 'fit',
                items  : [{
                    xtype : 'main'
                }]
            });
        }
        else{
            Ext.Msg.alert('Fail to Login','Try again');
        }
    },
    onClickReset : function(){

}
});
    
