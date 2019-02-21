import history from './history'

const menu = 
[
    {
        'label': 'ربات اینستاگرام',
        'icon': 'fa fa-user',
        command: () => history.push('/admin'),
        items: [
        	{
        		'label': 'لیست اکانت ها',
        		'icon': 'fa fa-users',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'گزارش گیری و آمار',
        		'icon': 'fa fa-user',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'خرید اعتبار ربات اینستاگرام',
        		'icon': 'fa fa-user',
        		command: () => history.push('/admin'),
        	}
        ]
    },
    {
        'label': 'سیستم ارسال محتوا',
        'icon': 'fa fa-image',
        command: () => history.push('/admin'),
        items: [
        	{
        		'label': 'ارسال جدید',
        		'icon': 'fa fa-image',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'صف ارسال محتوا',
        		'icon': 'fa fa-list-alt',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'مدیریت فایل ها',
        		'icon': 'fa fa-folder',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'خرید اعتبار ارسال پست',
        		'icon': 'fa fa-user',
        		command: () => history.push('/admin'),
        	},
        ]
    },
    {
        'label': 'تیکت پشتیبانی',
        'icon': 'fa fa-user',
        command: () => history.push('/admin'),
        items: [
        	{
        		'label': 'تیکت جدید',
        		'icon': 'fa fa-users',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'پیگیری تیکت ها',
        		'icon': 'fa fa-user',
        		command: () => history.push('/admin'),
        	},
        ]
    },
    {
        'label': 'تنظیمات',
        'icon': 'fa fa-user',
        command: () => history.push('/admin'),
        items: [
        	{
        		'label': 'تعویض رمز عبور',
        		'icon': 'fa fa-users',
        		command: () => history.push('/admin'),
        	},
        	{
        		'label': 'سوابق پرداخت ها',
        		'icon': 'fa fa-user',
        		command: () => history.push('/admin'),
        	},
        ]
    },
    {
        'label': 'شارژ حساب کاربری',
        'icon': 'fa fa-user',
        command: () => history.push('/admin'),
    },
    {
        'label': 'تماس با ما',
        'icon': 'fa fa-user',
        command: () => history.push('/admin'),
    },
]

export default menu