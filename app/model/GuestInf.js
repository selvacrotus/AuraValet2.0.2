Ext.define("CrotusValet.model.GuestInf", {
    extend: "Ext.data.Model",
    config: {

        fields: [
            { name: 'DataID', type: 'int' },
            { name: 'DataName', type: 'string' },
            { name: 'DataClass', type: 'string' },
            { name: 'DataLogoUrl', type: 'string' }
        ]
    }

});