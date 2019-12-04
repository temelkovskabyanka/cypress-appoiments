import Component from "../components/appointments/Component";
import Data from "../components/appointments/Data";

describe("Appointments Test", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
            return false;
        });
    });

    let appointmentComponent = new Component();
    let appointmentsData = new Data();

    it("Making new appointments", () => {
        cy.visit("https://demo.phppointofsale.com/index.php/home");
        appointmentComponent.loginButton.click();
        appointmentComponent.appointmentsButton.contains("Appointments").click();
        appointmentComponent.newAppointmentsButton.click();
        appointmentComponent.appointmentStartField.type(appointmentsData.appointmentStartField);
        appointmentComponent.appointmentEndFiled.type(appointmentsData.appointmentEndFiled);
        appointmentComponent.appoinmentPersonField.type(appointmentsData.appoinmentPersonField);
        appointmentComponent.employeeFiled("John Doe");
        appointmentComponent.notesFiled.type(appointmentsData.notesFiled);
        appointmentComponent.saveButton.click();
    });
});
