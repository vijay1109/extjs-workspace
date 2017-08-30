Ext.define('Rest.framework.grid.MasterGrid',{
	extend     : 'Ext.grid.Panel',
	alias      : 'widget.mastergrid',
	requires   : [
		'Rest.framework.grid.MasterGridController',
		'Rest.framework.grid.MasterGridModel'
	],
	controller : 'mastergrid',	
	viewModel  : 'mastergrid',
    selModel   : {
        selType   : 'checkboxmodel',
        checkOnly : false
    },
    columnLines : true,
    viewConfig  : {
        enableTextSelection: true
    },			
    height    : '100%',
    flex      : 1,	    
	initComponent : function(){
		var me = this;

		me.tbar = me.buildToolBar();
		me.callParent(arguments);
	},
	buildToolBar : function(){
		return [{
			xtype   : 'textfield',
			flex    : 1
		},{
			text    : 'Search',
			iconCls : 'fa fa-search',
			handler : 'onClickSearch'
		},{
			text    : 'Add',
			iconCls : 'fa fa-plus',
			handler : 'onClickAdd'
		},{
			text    : 'Edit',
			iconCls : 'fa fa-pencil',
			handler : 'onClickEdit'
		},{
			text    : 'Delete',
			iconCls : 'fa fa-trash',
			handler : 'onClickDelete'
		}];
	}
});