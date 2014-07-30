Ext.define("CrotusValet.view.Welcome", {
    extend: "Ext.Container",
    alias: "widget.welcomeview",
    cls: 'backgroundcolor',

    config: {
        layout : 'vbox',
        scrollable: true,
        cls: 'homeBgImg',
        styleHtmlContent:true,
        padding:'0 0 0 0',
        items: [

            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                items:[
                    {
                        xtype: "label",
                        cls:"labeltitle welcomeTxtHome",
                        html:'<h5><!--<span class="pinkTxt">Welcome To&nbsp;</span>--><span class="guestName">Forte do vale</span></h5>'
                    },
                    {
                        xtype:"spacer"
                    },
                    {
                        xtype: "button",
                        id: "checkout",
                        itemId: "btnCheckOut",
                        //width:"140px",
                        cls: "checkout",
                        //text:"CheckOut",
                        docked:'right'
                        //
                    },
                    {
                        xtype: "label",
                        docked: "right",
                        id: "lblResName",
                        html:''
                        //margin: 13
                    }


                ]

            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon1.png"><br/><br/>Hotel Information',
                                //itemId: "hotelInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon2.png"><br/><br/>Concierge Services',
                                //itemId: "conciergeBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon3.png"><br/><br/>Food &amp; Beverage',
                                itemId:"restaurantBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon4.png"><br/><br/>Channel &amp TV Info',
                                itemId: "channelInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon5.png"><br/><br/>Events',
                                itemId: "eventsBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon6.png"><br/><br/>Bus Services',
                                itemId:"busServicesBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'container',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon7.png"><br/><br/>Movie Services',
                                itemId: "moviesBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon8.png"><br/><br/>WIFI Connections',
                                itemId: "wifiBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'boxes',
                        items:[
                            {
                                xtype:"img",
                                html: '<img src="resources/icons/icon9.png"><br/><br/>Customer Info',
                                itemId:"customerInfoBtn",
                                cls: 'innerBoxes'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#hotelInfoBtn",
                event: "tap",
                fn: "onHotelInfoBtnClick"
            },
            {
                delegate: "#conciergeBtn",
                event: "tap",
                fn: "onConciergeBtnClick"
            },
            {
                delegate: "#restaurantBtn",
                event: "tap",
                fn: "onRestaurantBtnClick"
            },
            {
                delegate: "#channelInfoBtn",
                event: "tap",
                fn: "onChannelInfoBtnClick"
            },
            {
                delegate: "#eventsBtn",
                event: "tap",
                fn: "onEventsBtnClick"
            },
            {
                delegate: "#busServicesBtn",
                event: "tap",
                fn: "onBusServicesBtnClick"
            },
            {
                delegate: "#moviesBtn",
                event: "tap",
                fn: "onMoviesBtnClick"
            },
            {
                delegate: "#wifiBtn",
                event: "tap",
                fn: "onWifiBtnClick"
            },
            {
                delegate: "#customerInfoBtn",
                event: "tap",
                fn: "onCustomerInfoBtnClick"
            },
            {
                delegate: "#btnCheckOut",
                event: "tap",
                fn: "onCheckOutClick"
            }
        ]
    },
    onHotelInfoBtnClick: function () {
        this.fireEvent("hotelCommand");
        console.log('Button 1 Clicked');
    },
    onConciergeBtnClick: function () {
        this.fireEvent("conciCommand");
        console.log('Button 2 Clicked');

    },
    onRestaurantBtnClick: function () {
        this.fireEvent("restaurantCommand");
        console.log('Button 3 Clicked');

    },
    onChannelInfoBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 4 Clicked');
        //Ext.MessageBox('asds 4');
    },
    onEventsBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 5 Clicked');
        Ext.MessageBox('asds 5');
    },
    onBusServicesBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 6 Clicked');
        Ext.MessageBox('asds 6');
    },
    onMoviesBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 7 Clicked');
        Ext.MessageBox('asds 7');
    },
    onWifiBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 8 Clicked');
        Ext.MessageBox('asds 8');
    },
    onCustomerInfoBtnClick: function () {
        //this.fireEvent("enterCommand");
        console.log('Button 9 Clicked');
        Ext.MessageBox('asds 9');
    },
    onCheckOutClick: function () {
        console.log('Check out Clicked');
        this.fireEvent("checkOutCommand");
    }

});



