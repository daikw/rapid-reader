import React from "react"

export interface IFlashCardProps {
  // children: React.ReactNode
  words: string[]
}

export interface IFlashCardState {
  index: number
  flashing: boolean
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

class FlashCard extends React.Component<IFlashCardProps, IFlashCardState> {
  constructor(props: IFlashCardProps, context?: any) {
    super(props, context)
    this.state = {
      flashing: false,
      index: 0,
    }

    // binding implicitly (required in the ES6-React combination)
    this.onClick = this.onClick.bind(this)
  }

  public onClick() {
    this.toggleWordFlashing().then(() => this.incrementWord())
  }

  public async toggleWordFlashing() {
    await this.setState({ flashing: !this.state.flashing })
  }

  public async incrementWord() {
    while (this.state.flashing) {
      this.setState({
        index: (this.state.index + 1) % this.props.words.length,
      })
      await sleep(100)
    }
  }

  public render() {
    const { words } = this.props
    const { index } = this.state

    return (
      <div>
        <h1>
          <span>{words[index]}</span>
        </h1>
        <button onClick={this.onClick}>start</button>
      </div>
    )
  }
}

export default FlashCard
