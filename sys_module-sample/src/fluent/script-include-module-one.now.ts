import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['si-module-1'],
    table: 'sys_script_include',
    data: {
        access: 'public',
        active: true,
        api_name: 'x_sysmodulesample.SampleClass',
        client_callable: false,
        mobile_callable: false,
        name: 'SampleClass',
        sandbox_callable: false,
        script: "const sinc = require('./src/server/sample-class.js'); var SampleClass = sinc.SampleClass;",
        sys_name: 'SampleClass',
    },
})
