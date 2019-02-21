import history from './history'

const menu = 
[
    {
        'label': 'کاربران',
        'icon': 'fa fa-user',
        command: () => history.push('/admin/users')
    }
]

export default menu