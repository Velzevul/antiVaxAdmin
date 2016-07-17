import React from 'react'
import {connect} from 'react-redux'

import ScheduleBuilderItem from '../ScheduleBuilderItem'
import {ItemForm, ItemFormHeader, ItemFormBody} from '../ItemForm'
import {Editor, Button} from '../UI'
import {Flex, Block, ListInline, ListInlineItem, List, ListItem} from '../Layouts'
import {fetchSchedule, updateSchedule} from '../../store/scheduleActions'
import {fetchArticles} from '../../store/articleActions'
import Loading from '../Loading'
import Title from '../Title'

class ScheduleBuilder extends React.Component {
  constructor (props) {
    super(props)

    this.discard = this.discard.bind(this)
    this.changeItem = this.changeItem.bind(this)
    this.changePostScheduleContent = this.changePostScheduleContent.bind(this)
    this.insertItem = this.insertItem.bind(this)

    this.state = {
      isDirty: false,
      items: this.props.items,
      postScheduleContent: this.props.postScheduleContent
    }
  }

  componentWillMount () {
    const {fetchData} = this.props

    fetchData()
  }

  componentWillReceiveProps (newProps) {
    const {items, postScheduleContent, isFetchingVaccines, isFetchingSchedule, isUpdating} = newProps

    if (!isUpdating && !isFetchingVaccines && !isFetchingSchedule) {
      const newState = {
        isDirty: false,
        items,
        postScheduleContent
      }

      this.setState(newState)
    }
  }

  discard () {
    const {items, postScheduleContent} = this.props

    this.setState({
      isDirty: false,
      items,
      postScheduleContent
    })
  }

  changeItem (prop, value, index) {
    const targetItem = this.state.items[index]

    this.setState({
      isDirty: true,
      items: [
        ...this.state.items.slice(0, index),
        Object.assign({}, targetItem, {
          [prop]: value
        }),
        ...this.state.items.slice(index + 1)
      ]
    }, () => {
      console.log(this.state)
    })
  }

  changePostScheduleContent (value) {
    if (value !== this.state.postScheduleContent && value !== '<p><br></p>') {
      this.setState({
        isDirty: true,
        postScheduleContent: value
      })
    }
  }

  insertItem () {
    const {vaccines} = this.props

    this.setState({
      isDirty: true,
      items: [
        ...this.state.items,
        {
          age: '',
          vaccines: [{
            url: vaccines[0].data.url,
            title: vaccines[0].data.title
          }],
          isDeleted: false
        }
      ]
    })
  }

  render () {
    const {isFetchingVaccines, isFetchingSchedule, isUpdating, vaccines, save} = this.props

    if (isFetchingVaccines || isFetchingSchedule) {
      return <Loading />
    } else {
      let schedule = this.state.items.map((item, index) =>
        <ListItem n={2} key={index}>
          <ScheduleBuilderItem
            item={item}
            vaccines={vaccines}
            isUpdating={isUpdating}
            onChange={(prop, v) => this.changeItem(prop, v, index)} />
        </ListItem>
      )

      let header = ''
      if (this.state.isDirty) {
        header = (
          <Flex justifyContent="space-between">
            <Title label="Unsaved Changes" theme="error" />

            <ListInline>
              <ListInlineItem>
                <Button
                  theme="accent1"
                  disabled={isUpdating}
                  onClick={() => save({
                    items: this.state.items,
                    postScheduleContent: this.state.postScheduleContent
                  })}>Save</Button>
              </ListInlineItem>

              <ListInlineItem>
                <Button
                  inverse
                  theme="accent1"
                  disabled={isUpdating}
                  onClick={this.discard}>Discard</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
        )
      } else {
        header = (
          <Title label="All Saved" theme="success" />
        )
      }

      return (
        <ItemForm>
          <ItemFormHeader>
            {header}
          </ItemFormHeader>

          <ItemFormBody>
            <Block n={3}>
              <List n={2}>
                {schedule}
              </List>

              <Button
                small
                inverse
                disabled={isUpdating}
                theme="accent1"
                onClick={() => this.insertItem()}>Insert new item</Button>
            </Block>

            <Editor
              label="Post schedule content:"
              value={this.state.postScheduleContent}
              disabled={isUpdating}
              onChange={this.changePostScheduleContent} />
          </ItemFormBody>
        </ItemForm>
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetchingVaccines: state.articles.isFetching,
      isFetchingSchedule: state.schedule.isFetching,
      vaccines: state.articles.items.filter(a => a.data.type.id === 'vaccines'),
      isUpdating: state.schedule.isUpdating,
      items: state.schedule.items.map(i => Object.assign({}, i)),
      postScheduleContent: state.schedule.postScheduleContent
    }
  },
  dispatch => {
    return {
      save: (data) => {
        dispatch(updateSchedule(data))
      },
      fetchData: () => {
        dispatch(fetchArticles())
        dispatch(fetchSchedule())
      }
    }
  }
)(ScheduleBuilder)
