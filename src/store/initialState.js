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
  articles: {
    isFetching: true,
    items: [],
    newArticle: {
      isUpdating: false,
      data: {},
      errors: {}
    }
  },
  article: {
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
  schedule: {
    isFetching: true,
    isUpdating: false,
    items: [],
    postScheduleContent: null
  },
  searchIndex: {
    isFetching: true,
    isUpdating: false,
    lastUpdatedOn: null,
    lastUpdatedBy: null
  }
}
