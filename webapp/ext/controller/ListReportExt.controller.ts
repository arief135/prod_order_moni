import MessageToast from "sap/m/MessageToast";
import Event from "sap/ui/base/Event";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";

export default {

    Action1: function (oEvent: Event) {
        MessageToast.show("Custom handler invoked.");

        const model = new ODataModel("/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner");

        model.create("/A_BusinessPartner", {
            BusinessPartner: "123456",
            BusinessPartnerFullName: "John Doe",
            BusinessPartnerType: "1",
            BusinessPartnerGrouping: "A",
            LastChangeDateTime: new Date(),
            LastChangeByUser: "admin"
        }, {
            success: function (data) {
                MessageToast.show("Business Partner created successfully.");
            },
            error: function (oError) {
                MessageToast.show("Error creating Business Partner: " + oError.message);
            }
        })


    }
}