export default class Component {

    get loginButton() {
        return cy.get(".btn.btn-primary.btn-block");
    }

    get appointmentsButton() {
        return cy.get("#mainMenu");
    }

    get newAppointmentsButton() {
        return cy.get(".btn.btn-primary.btn-lg.hidden-sm.hidden-xs");
    }

    get appointmentStartField() {
        return cy.get("#start_time");
    }

    get appointmentEndFiled() {
        return cy.get("#end_time");
    }

    get appoinmentPersonField() {
        return cy.get("#choose_person");
    }

    employeeFiled(option) {
        return cy.get("#employee_id").select(option);
    }

    get notesFiled() {
        return cy.get("#notes");
    }

    get saveButton() {
        return cy.get("#submitf");
    }

    get totalAppoinmentsText() {
        return cy.get("#manage_total_items");
    }

    get editAll() {
        return cy.get("[for=\"select_all\"] span");
    }

    get deleteButton() {
        return cy.get("#delete");
    }

    get modalWindow() {
        return cy.get(".modal-footer");
    }

    get confirmButton() {
        return cy.get(".btn .btn-primary");
    }
}

