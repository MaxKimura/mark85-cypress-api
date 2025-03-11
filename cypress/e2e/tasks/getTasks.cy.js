describe('GET /tasks', function () {

    beforeEach(function () {
        cy.fixture('tasks/tasks-get').then(function (tasks) {
            this.tasks = tasks
        })
    })

    it('get my tasks', function () {

        const { user, tasks } = this.tasks.list

        cy.task('removeTasksLike', 'pag4r')

        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                tasks.forEach(function (t) {
                    cy.postTask(t, responseUser.body.token)
                })

                cy.getTasks(responseUser.body.token).then(responseGet => {
                    expect(responseGet.status).to.eq(200)
                }).its('body')
                    .should('be.an', 'array')
                    .and('have.length', tasks.length)
            })
    })

})

describe('GET /taks/:id', function () {
    beforeEach(function () {
        cy.fixture('tasks/tasks-get').then(function (tasks) {
            this.tasks = tasks
        })
    })

    it('get unique task', function () {
        const { user, task } = this.tasks.unique

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {

                    cy.getUniqueTask(responseTask.body._id, responseUser.body.token)
                        .then(responseGet => {
                            expect(responseGet.status).to.eq(200)
                        })
                })
            })
    })

    it('task not found', function () {
        const { user, task } = this.tasks.not_found

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(responseUser => {

                cy.postTask(task, responseUser.body.token).then(responseTask => {
                    cy.deleteTask(responseTask.body._id, responseUser.body.token)
                        .then(responseGet => {
                            expect(responseGet.status).to.eq(204)

                            cy.getUniqueTask(responseTask.body._id, responseUser.body.token)
                                .then(responseGet => {
                                    expect(responseGet.status).to.eq(404)
                                })
                        })
                })
            })
    })
})