AFRAME.registerComponent('scene-switch', {
  schema: {
    name : {type: 'string', default: 'default'}
  },

  init: async function() {
    this.onClick = this.onClick.bind(this)

    this.SceneName = this.data["name"]
    this.el.addEventListener("click", this.onClick)
  },

  onClick: async function() {
    // console.log("area")
    SwitchArea(this.SceneName)
  }
})

