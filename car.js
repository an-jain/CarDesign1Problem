AFRAME.registerComponent("car", {
    schema: {
        radius: { type: "number", default:150 },
        height: { type: "number", default:3 }
    },
    tick: function() {
        var pos = this.el.getAttribute("position")
        this.el.setAttribute("position", {x:pos.x,y:pos.y,z:pos.z})
    }
    })