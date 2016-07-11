export default {
  auth: {
    isFetching: false,
    // user: {
    //   id: 'velz',
    //   name: 'Volodymyr Dziubak',
    //   email: 'volodymyr.dzyubak@gmail.com',
    //   admin: true
    // },
    // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZlbHoiLCJuYW1lIjoiVm9sb2R5bXlyIER6aXViYWsiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNDY3OTkzMzgyLCJleHAiOjE0NjgwNzk3ODJ9.mz8WGnCa1WJDA4W9uiydJ43-5tdJ0lpU3bq0UvXIG7k'
    user: null,
    token: null
  },
  flash: {
    message: null,
    type: null,
    timeoutId: null
  },
  questions: {
    isFetching: true,
    items: []
  },
  question: {
    isUpdating: false,
    data: {}
  },
  faqs: {
    isFetching: true,
    items: []
  },
  faq: {
    isDirty: false,
    isUpdating: false,
    data: {},
    errors: {}
  },
  blogposts: {
    isFetching: true,
    items: []
  },
  sections: {
    isFetching: true,
    items: []
  },
  users: {
    isFetching: true,
    items: []
  }
}
