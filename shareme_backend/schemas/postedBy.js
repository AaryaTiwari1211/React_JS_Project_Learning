export default{
    name: 'postedBy',
    title:'PostedBy',
    type:'document',
    fields: [
        {
            name: 'postedby',
            title: 'PostedBy',
            type: 'reference',
            to: [{type:'user'}]
        },
    ]
}