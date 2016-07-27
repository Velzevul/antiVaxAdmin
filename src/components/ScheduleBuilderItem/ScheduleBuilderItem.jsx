import React from 'react'

import styles from './ScheduleBuilderItem.css'
import {Input, Select, Button, LinkButton} from '../UI'
import {Media, MediaBody, MediaFigure, Block, ListInline, ListInlineItem} from '../Layouts'

class ScheduleBuilderItem extends React.Component {
  constructor (props) {
    super(props)

    this.addVaccine = this.addVaccine.bind(this)
    this.changeVaccine = this.changeVaccine.bind(this)
    this.deleteVaccine = this.deleteVaccine.bind(this)
  }

  addVaccine () {
    const {item, vaccines, onChange} = this.props
    const newVaccines = [
      ...item.vaccines,
      vaccines[0].data._id
    ]

    onChange('vaccines', newVaccines)
  }

  changeVaccine (index, value) {
    const {item, onChange} = this.props

    const newVaccines = [
      ...item.vaccines.slice(0, index),
      value,
      ...item.vaccines.slice(index + 1)
    ]

    onChange('vaccines', newVaccines)
  }

  deleteVaccine (index) {
    const {item, onChange} = this.props

    const newVaccines = [
      ...item.vaccines.slice(0, index),
      ...item.vaccines.slice(index + 1)
    ]

    onChange('vaccines', newVaccines)
  }

  render () {
    const {item, vaccines, isUpdating, onChange} = this.props

    const vaccineList = item.vaccines.map((v, index) =>
      <Block key={index}>
        <ListInline>
          <ListInlineItem>
            <Select
              label="Vaccine:"
              labelParams={{
                width: 0,
                padding: 2
              }}
              value={v}
              disabled={isUpdating || item.isDeleted}
              options={vaccines.map(v => {
                return {
                  id: v.data._id,
                  label: v.data.title
                }
              })}
              onChange={(v) => this.changeVaccine(index, v)} />
          </ListInlineItem>

          <ListInlineItem>
            <LinkButton
              small
              theme="error"
              disabled={isUpdating || item.isDeleted}
              onClick={() => this.deleteVaccine(index)}>Delete</LinkButton>
          </ListInlineItem>
        </ListInline>
      </Block>
    )

    return (
      <div className={`${styles.Item} ${item.isDeleted ? styles.Item_deleted : ''}`}>
        <Media>
          <MediaBody>
            <div className={styles.Item__body}>
              <Media>
                <MediaFigure n={2}>
                  <Input
                    label="Age:"
                    labelParams={{width: 0, padding: 2}}
                    value={item.age}
                    disabled={isUpdating || item.isDeleted}
                    onChange={(value) => onChange('age', value)} />
                </MediaFigure>

                <MediaBody>
                  {vaccineList}

                  <LinkButton
                    small
                    disabled={isUpdating || item.isDeleted}
                    onClick={this.addVaccine}>Add vaccine</LinkButton>
                </MediaBody>
              </Media>
            </div>
          </MediaBody>

          <MediaFigure n={0} nl={2}>
            <ListInline>
              {item.isDeleted
              ? <ListInlineItem>
                <div className={styles.Item__deletedInfo}>will be deleted on save</div>
              </ListInlineItem>
              : null
              }

              <ListInlineItem>
                <Button
                  small
                  inverse
                  theme={item.isDeleted ? 'accent1' : 'error'}
                  onClick={() => onChange('isDeleted', !item.isDeleted)}>{item.isDeleted ? 'Put Back' : 'Delete'}</Button>
              </ListInlineItem>
            </ListInline>
          </MediaFigure>
        </Media>
      </div>
    )
  }
}

export default ScheduleBuilderItem
