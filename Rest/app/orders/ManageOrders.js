Ext.define('Rest.orders.ManageOrders',{
	extend     : 'Ext.panel.Panel',
	alias      : 'widget.rmmanageorders',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'manageordergrid'
		}]
	}
});