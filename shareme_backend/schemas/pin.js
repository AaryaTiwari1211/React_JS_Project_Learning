export default{
    name: 'pin',
    title:'Pin',
    type:'document',
    fields: [
        {
            name: 'userId',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true  // Decides which area of image shoul be cropped and vice versa
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'postedby',
            title: 'PostedBy',
            type: 'postedBy', //JS is smart enough to know this will be referenced later to another document
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [
                {type: 'save'}
            ]
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'array',
            of: [
                {type: 'comment'}
            ]
        },

    ]
}