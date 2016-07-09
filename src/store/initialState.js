export default {
  auth: {
    isFetching: false,
    user: {
      id: 'velz',
      name: 'Volodymyr Dziubak',
      email: 'volodymyr.dzyubak@gmail.com',
      admin: true
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZlbHoiLCJuYW1lIjoiVm9sb2R5bXlyIER6aXViYWsiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNDY3OTkzMzgyLCJleHAiOjE0NjgwNzk3ODJ9.mz8WGnCa1WJDA4W9uiydJ43-5tdJ0lpU3bq0UvXIG7k'
    // user: null,
    // token: null
    // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIiLCJuYW1lIjoiVXNlciIsImlhdCI6MTQ2Nzk5NTA5NSwiZXhwIjoxNDY4MDgxNDk1fQ.mX_1770_GlKiY_HHTAGCqrBafG6C1zRiN4ww02WGQf0' // user's token
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
    isUpdating: true,
    data: {}
  },
  faqs: {
    isFetching: true,
    items: []
  },
  faq: {
    isUpdating: true,
    data: {}
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
