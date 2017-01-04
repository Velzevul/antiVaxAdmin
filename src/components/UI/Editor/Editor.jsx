import React from 'react'
import { findDOMNode } from 'react-dom'
import Scribe from 'scribe-editor'
import Toolbar from 'scribe-plugin-toolbar'
import HeadingCmd from 'scribe-plugin-heading-command'
import LinkPromptCmd from 'scribe-plugin-link-prompt-command'
import UnlinkCmd from 'scribe-plugin-intelligent-unlink-command'

const baseline = 0.750
import {Flex, Block} from '../../Layouts'

import styles from './Editor.css'

class Editor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: this.props.value
    }
  }

  componentDidMount () {
    const editor = findDOMNode(this.refs.editor)
    const toolbar = findDOMNode(this.refs.toolbar)

    const scribe = new Scribe(editor)
    scribe.use(HeadingCmd(1))
    scribe.use(HeadingCmd(2))
    scribe.use(LinkPromptCmd())
    scribe.use(UnlinkCmd())
    scribe.use(Toolbar(toolbar))

    scribe.setContent(this.state.value)

    setTimeout(() => {
      scribe.on('content-changed', () => {
        this.setState({value: scribe.getHTML()})
        this.props.onChange(scribe.getHTML())
      })
    })

    this.scribe = scribe
  }

  componentWillReceiveProps (newProps) {
    if (newProps.value !== this.state.value) {
      this.scribe.setContent(newProps.value)
      this.setState({value: newProps.value})
    }
  }

  render () {
    const {error, label} = this.props

    return (
      <div className={`${styles.Editor} ${error ? styles.Editor_error : ''}`}>
        <div className={`${styles.Editor__label}`}>{label}</div>

        <div className={styles.Editor__body}>
          <div className={styles.Editor__toolbar} ref="toolbar">
            <Flex>
              <button className={`${styles.Editor__command} ${styles.Editor__command_h1}`}
                data-command-name="h1">
                Heading 1
              </button>

              <button className={`${styles.Editor__command} ${styles.Editor__command_h2}`}
                data-command-name="h2">
                Heading 1
              </button>

              <div className={styles.Editor__separator} />

              <button className={`${styles.Editor__command} ${styles.Editor__command_bold}`}
                data-command-name="bold">
                bold
              </button>

              <button className={`${styles.Editor__command} ${styles.Editor__command_italic}`}
                data-command-name="italic">
                italic
              </button>

              <button className={`${styles.Editor__command} ${styles.Editor__command_ol}`}
                data-command-name="insertOrderedList">
                Ol
              </button>

              <button className={`${styles.Editor__command} ${styles.Editor__command_ul}`}
                data-command-name="insertUnOrderedList">
                Ul
              </button>

              <div className={styles.Editor__separator} />

              <button className={`${styles.Editor__command} ${styles.Editor__command_link}`}
                data-command-name="linkPrompt">
                Link
              </button>

              <button className={`${styles.Editor__command} ${styles.Editor__command_unlink}`}
                data-command-name="unlink">
                Unlink
              </button>
            </Flex>
          </div>

          <div className={styles.Editor__editor} ref="editor" />

          <div className={styles.Editor__error}>{error}</div>
        </div>
      </div>
    )
  }
}

export default Editor
