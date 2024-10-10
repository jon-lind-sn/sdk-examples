import { Test } from '@servicenow/sdk/core'

/**
 * This is an example ATF test that uses impesonation, form actions, and field state validation steps
 */

Test(
    {
        $id: Now.ID['Multi-Batch Test'],
        active: true,
        description:
            'A test that switches between UI steps and server-side steps to demonstrate the concept of batching. The server side step with order 500 breaks the test into three distinct "batches." Two in the UI step environment, and one in the server step environment.',
        name: 'Multi-Batch Test',
    },
    (atf) => {
        atf.server.impersonate({ user: 'd8f57f140b20220050192f15d6673a98' })
        atf.form.openNewForm({ table: 'sys_user', view: 'itil', formUI: 'standard_ui' })
        atf.form.fieldStateValidation({
            formUI: 'standard_ui',
            mandatory: [],
            notMandatory: ['first_name', 'last_name'],
            notReadOnly: ['title'],
            notVisible: [],
            readOnly: [],
            table: 'sys_user',
            visible: [],
        })
        atf.form.setFieldValue({
            fieldValues: { first_name: 'Emily', last_name: 'Employee' },
            formUI: 'standard_ui',
            table: 'sys_user',
        })
        atf.form.submitForm({ formUI: 'standard_ui', assertType: 'form_submitted_to_server' })
        atf.form.openNewForm({ table: 'sc_task', view: '', formUI: 'standard_ui' })
        atf.form.setFieldValue({
            fieldValues: {
                short_description: 'This is my second UI Batch',
                description: 'It is separated by the server side step. But each step will still run in order.',
            },
            formUI: 'standard_ui',
            table: 'sc_task',
        })
        atf.form.submitForm({ formUI: 'standard_ui', assertType: 'form_submitted_to_server' })
    }
)