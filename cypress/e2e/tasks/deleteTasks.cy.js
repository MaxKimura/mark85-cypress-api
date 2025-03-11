describe('DELETE /taks/:id', function () {
    beforeEach(function () {
        cy.fixture('tasks/tasks-delete').then(function (tasks) {
            this.tasks = tasks
        })
    })

    it('remove a task', function () {
        const { user, task } = this.tasks.remove

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {

                    cy.deleteTask(responseTask.body._id, responseUser.body.token)
                        .then(responseDelete => {
                            expect(responseDelete.status).to.eq(204)
                        })
                })
            })
    })

    it('task not found', function () {
        const { user, task } = this.tasks.not_found_remove

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {
                    cy.deleteTask(responseTask.body._id, responseUser.body.token)
                        .then(responseGet => {
                            expect(responseGet.status).to.eq(204)

                            cy.deleteTask(responseTask.body._id, responseUser.body.token)
                                .then(responseDelete => {
                                    expect(responseDelete.status).to.eq(404)
                                })
                        })
                })
            })
    })
})