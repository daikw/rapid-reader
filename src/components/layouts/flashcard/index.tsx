import React from "react"

export interface IFlashCardProps {
  // children: React.ReactNode
  words: string[]
}

export interface IFlashCardState {
  index: number
}

class FlashCard extends React.Component<IFlashCardProps, IFlashCardState> {
  constructor(props: IFlashCardProps, context?: any) {
    super(props, context)
    this.state = { index: 0 }

    // binding implicitly (required in the ES6-React combination)
    this.incrementWord = this.incrementWord.bind(this)
  }

  public incrementWord() {
    this.setState({ index: this.state.index + 1 })
  }

  public render() {
    const { words } = this.props
    const { index } = this.state

    return (
      <div>
        <h1>
          <span>{words[index]}</span>
        </h1>
        <button onClick={this.incrementWord}>change the word</button>
      </div>
    )
  }
}

export default FlashCard
