export default {
  auth: {
    isFetching: false,
    user: null
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
  sections: {
    isFetching: true,
    items: [],
    newSection: {
      isUpdating: false,
      data: {},
      errors: {}
    }
  },
  section: {
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
  searchIndex: {
    isFetching: true,
    isUpdating: false,
    lastUpdatedOn: null,
    lastUpdatedBy: null
  }
}
