Cypress.Commands.add('purgeMessages', () => {
    cy.api({
        url: `${Cypress.env('amqpHost')}/tasks/contents`,
        method: 'DELETE',
        body: {
            vhost: 'pgtvsdup',
            name: Cypress.env('amqpQueue'),
            mode: 'purge'
        },
        headers:{
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

Cypress.Commands.add('getMessageQueue', () => {
    cy.api({
        url: 'https://possum.lmq.cloudamqp.com/api/queues/pgtvsdup/tasks/get',
        method: 'POST',
        body: {
            count: 1,
            ack_mode: 'reject_requeue_true',
            encoding: 'auto',
            truncate: 50000
        },
        headers:{
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})