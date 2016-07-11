import React from 'react'
import { findDOMNode } from 'react-dom'
import Scribe from 'scribe-editor'
import Toolbar from 'scribe-plugin-toolbar'
import HeadingCmd from 'scribe-plugin-heading-command'
import LinkPromptCmd from 'scribe-plugin-link-prompt-command'
import UnlinkCmd from 'scribe-plugin-intelligent-unlink-command'

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
    scribe.use(HeadingCmd(3))
    scribe.use(LinkPromptCmd())
    scribe.use(UnlinkCmd())
    scribe.use(Toolbar(toolbar))

    scribe.setContent(this.state.value)

    scribe.on('content-changed', () => {
      this.setState({value: scribe.getHTML()})

      this.props.onChange(scribe.getHTML())
    })

    this.scribe = scribe
  }

  componentWillReceiveProps () {
    // empty for now
  }

  render () {
    const {label, value, error, disabled, onChange} = this.props

    return (
      <div className={styles.Editor}>
        <div className={styles.Editor__toolbar} ref="toolbar">
          <button className={`${styles.Editor__command} ${styles.Editor__command_h1}`}
            data-command-name="h1">
            Heading 1
          </button>

          <button className={`${styles.Editor__command} ${styles.Editor__command_h2}`}
            data-command-name="h2">
            Heading 1
          </button>

          <button className={`${styles.Editor__command} ${styles.Editor__command_h3}`}
            data-command-name="h3">
            Heading 3
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

          <button className={`${styles.Editor__command} ${styles.Editor__command_link}`}
            data-command-name="unlink">
            Unlink
          </button>
        </div>

        <div className={styles.Editor__textarea} ref="editor" />
      </div>
    )
  }
}

export default Editor
