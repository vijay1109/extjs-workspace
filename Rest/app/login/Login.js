Ext.define('Rest.login.Login',{
extend : 'Ext.Window',
alias : 'widget.login',
title : 'Login Form',
controller : 'login',
autoShow : true,
width : 400,
height :250,
bodyPadding : 20,
closable : false,
draggable : false,
resizable : false,
 items    : [{
        xtype      : 'textfield',
        fieldLabel : 'Username',
        name       : 'username',
        reference  : 'username',
        value      : 'admin',
        allowBlank : false
    },{
        xtype      : 'textfield',
        inputType  : 'password',
        fieldLabel : 'Password',
        name       : 'password',
        reference  : 'password',
        value      : '12345678',        
        allowBlank : false
    }],
    buttons : [{
        text      : 'Login',
        handler   : 'onClickLogin'
        },{
        text      : 'Reset',
        handler   : 'onClickReset'
    }]
})