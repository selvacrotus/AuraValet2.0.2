Ext.define('CrotusValet.view.CategoryDetail', {
    extend: "Ext.Container",
    alias: "widget.categorydetailview",
    id:"availabilitxx",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'categoryContainer',
        padding:'0',
        items:[
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                items:[
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                        xtype: "label",
                        cls:"labeltitle",
                        id:"subcategory",
                        html:'<h5><span class="guestName">Sub - Category </span></h5>'
                    },
                    {
                        xtype: "button",

                        iconCls: 'cart3',
                        cls:"myCartBtnAllscreen",
                        text: "My Cart",

                        itemId: "btnMyCart"
                    }

                ]
            },

            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
                    /*pack:'center',
                    align: 'center'*/
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/MGM_LOGO.png'>"
                    },
                    /*{
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/PL_logo.png'>"
                    },*/
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/icons/aura_logo.png'>"
                    },
                    {
                        xtype: "button",
                        hidden:true,
                        cls: 'titleBar_btns',
                        iconCls: 'cart3',
                        text: "My Cart",
                        itemId: "btnMyCart"
                    }
                ]
            },

            {
                docked: 'bottom',
                zIndex: 888,
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
                items: [
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons homeIcon',
                                itemId: 'Hmaster'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon10.png'>",
                                itemId: 'congirence'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines'
                            }
                        ]
                    },
                    { xtype: "spacer" }

                ]
            },

            {
                xtype: 'container',
                height: "100%",
                cls:'fbSubCatContainer',
                /*layout:{
                    type:'hbox'
                },*/
                /*scrollable:{
                    direction:'horizontal',
                    directionLock:true
                },*/
                items: [{
                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvCategory",
                    store: "CategoryDetails",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                    itemTpl: ['<div class="fbSubCatItemImg"><img src=\"{path}\" /><p id="aligntext" class="fbSubCatItemTxt">{prod_class_name}</p></div>',
                    ].join(''),
                    height: "100%",
                    scrollable:'horizontal',
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: false
                    },
                    itemCls: 'fbSubCatItems',
                    itemLength: 200
                }]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButton"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            },
            {
                delegate: "#dvCategory",
                event: "itemtap",
                fn: "onCategoryViewTap"
            },
            {
                delegate: "#btnMyCart",
                event: "tap",
                fn: "onMyCartTap"
            }
        ]
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    },
    onCategoryViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("categoryCommand",list, target, index, record, evt, options);
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    },
    onMyCartTap:function(){
        console.log("mycart");
        this.fireEvent("myCartCategoryCommand");
    }
});


