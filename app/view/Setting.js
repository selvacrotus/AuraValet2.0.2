Ext.define("CrotusValet.view.Setting", {
        extend: "Ext.Panel",
        id: 'reservationForm',
        alias: "widget.settingview",

        config: {
            layout : 'vbox',
            styleHtmlContent:true,
            padding:'0',
            cls: 'loginBg',
            scrollable:true,
            items: [
                {
                    xtype:'container',
                    height:'45px',
                    cls:'introText',
                    html:'<h5><span class="guestName">Sign In</span></h5>'
                },
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    height: '100px',
                    width: '100%',
                    cls: 'logoContainer',
                    layout: {
                        type: 'hbox'
                   //     pack:'center',
                   //     align: 'center'
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
                        { xtype: "spacer" },
                    ]
                },
                {
                    xtype: "fieldset",
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    cls:'setfieldset settingsContainer',

                    items: [

                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Reservation Id...',
                            itemId: "txtReservationId",
                            required: true,
                            name: 'title',
                            clearIcon: false,
                            width: '100%',
                            labelWidth: '170px',
                            //label: 'Reservation Id:',
                            cls:'settingform'
                            //    labelWidth: 120

                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Room No...',
                            itemId: "txtAdminId",
                            clearIcon: false,
                            required: true,
                            name: 'title',
                            width: '100%',
                           // label: 'Room No:',
                            labelWidth: '170px',
                            cls:'settingform'
                            //    labelWidth: 120
                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Reservation Name...',
                            itemId: 'psdAdminpsd',
                            clearIcon: false,
                            required: true,
                            name: 'password',
                            labelWidth: '170px',
                            width: '100%',
                           // label: 'Reservation Name:',
                            cls:'settingform'
                            //     labelWidth: 120

                        },
                        {
                            xtype: "button",
                            itemId: "btnCheckIn",
                            cls: 'titleBar_btns',
                            text:"Check-In",
                            width: "100px",
                            height: "40px",
                            margin: 15
                        }/*,
                        {
                            xtype: "button",
                            itemId: "btnCheckOut",
                            width:"140px",
                            cls: "checkout",
                            text:"CheckOut",
                            margin: 15
                        }*/
                    ]
                }
            ],
            listeners: [
                {
                    delegate: "#Hmaster",
                    event: "tap",
                    fn: "hMasterTap"
                },
                {
                    delegate: "#btnCheckIn",
                    event: "tap",
                    fn: "onCheckInClick"
                },
                {
                    delegate: "#backButton",
                    event: "tap",
                    fn: "onBackButton"
                },
                {
                    delegate: "#btnCheckOut",
                    event: "tap",
                    fn: "onCheckOutClick"
                }
            ]
        },
    hMasterTap:function(){
        this.fireEvent("backToMasterCommand");
    },
    onCheckInClick: function () {
        this.fireEvent("checkInCommand");
    },
    onCheckOutClick: function () {

        this.fireEvent("checkOutCommand");
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    }

    });