
describe('PUT /taks/:id/done', function () {
    beforeEach(function () {
        cy.fixture('tasks/tasks-put').then(function (tasks) {
            this.tasks = tasks
        })
    })

    it('update task to done', function () {
        const { user, task } = this.tasks.update

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {

                    cy.putTaskDone(responseTask.body._id, responseUser.body.token)
                        .then(responsePut => {
                            expect(responsePut.status).to.eq(204)
                        })

                    cy.getUniqueTask(responseTask.body._id, responseUser.body.token)
                        .then(responseGet => {
                            expect(responseGet.body.is_done).to.be.true
                        })
                })
            })
    })

    it('task not found', function () {
        const { user, task } = this.tasks.update

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {
                    cy.deleteTask(responseTask.body._id, responseUser.body.token)
                        .then(responseGet => {
                            expect(responseGet.status).to.eq(204)

                            cy.putTaskDone(responseTask.body._id, responseUser.body.token)
                                .then(responsePut => {
                                    expect(responsePut.status).to.eq(404)
                                })
                        })
                })
            })
    })
})