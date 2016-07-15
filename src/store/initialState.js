export default {
  auth: {
    isFetching: false,
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
    items: [],
    newFaq: {
      isUpdating: false,
      data: {},
      errors: {}
    }
  },
  faq: {
    isUpdating: false,
    data: {},
    errors: {}
  },
  blogposts: {
    isFetching: true,
    items: [],
    newBlogpost: {
      isUpdating: false,
      data: {},
      errors: {}
    }
  },
  blogpost: {
    isUpdating: false,
    data: {},
    errors: {}
  },
  users: {
    isFetching: true,
    items: [],
    newUser: {
      isUpdating: false,
      data: {},
      errors: {}
    }
  },
  user: {
    isUpdating: false,
    data: {},
    errors: {}
  },
  sections: {
    isFetching: true,
    items: []
  }
}
