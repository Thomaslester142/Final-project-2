var namespace = "http://www.w3.org/2000/svg"

// Write your code here!
var astronaut = makeImage("http://bestanimations.com/Earth&Space/astronaut-in-space-animation-4.gif", 30, 59, 20, 22, 1.0)
var asteroid = makeImage("http://ecx.images-amazon.com/images/I/71xwHBvIB8L.png", 50, 60, 15, 18, 1.0)
var asteroid2 = makeImage("http://ecx.images-amazon.com/images/I/71xwHBvIB8L.png", 140, 45, 22, 20, 1.0)
var asteroid3 = makeImage("http://bestanimations.com/Earth&Space/space-comet-asteroid-animation.gif", 90, 70, 22, 20, 1.0)
var moon = makeImage("http://a1star.com/images/moonphs.gif", 130, 70, 22, 20, 1.0)
var man_on_moon = makeImage("https://www.amazing-animations.com/animations/spaceman5.gif", 135, 70, 10, 10, 1.0)
var Player = makeImage("https://steamcdn-a.akamaihd.net/steam/apps/404800/extras/berserker@2x.png?t=1447378175", 90, 50, 12, 12, 1.0)
var Enemy = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 60, 0, 20, 20, 1.0)
var Enemy2 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 90, 0, 20, 20, 1.0)
var Enemy3 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 120, 0, 20, 20, 1.0)
var Enemy4 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 30, 0, 20, 20, 1.0)
var Enemy5 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 10, 0, 20, 20, 1.0)
var Enemy6 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 150, 0, 20, 20, 1.0)
var Enemy7 = makeImage("http://static1.squarespace.com/static/50c25455e4b0ef5720704c6b/54b94ba5e4b0b5bb4be6a892/54b94d72e4b0c2c1fae545b6/1421430256503/Spaceship.png", 170, 0, 20, 20, 1.0)
var Barrier = makeImage("http://a1star.com/images/glitterline1.gif", 0, 0, 200, 20, 1.0)
var Barrier2 = makeImage("http://a1star.com/images/glitterline1.gif", 0, 90, 200, 20, 1.0)


var scoreLabel = makeText("0", 10, 8, 12, 12, "yellow", 1.0)
var score = 0

function updateScore() {
  score = score + 10
  scoreLabel.innerHTML = score
}

function resetScore() {
    score = 0
}

function animate1() {
    move(Enemy, 0, 0.4)
 move(Enemy2, 0.2, 1.0)
 move(Enemy3, -0.2, 0.1)
 move(Enemy4, -0.1, 2)
 move(Enemy5, 0.4, 0.3)
 move(Enemy6, 0.2, 0.1)
 move(Enemy7, 0.1, 0.4)
 var y = getY(Enemy)
 var x = getX(Enemy)
 if (y > 70 || x < 0) {
   setY(Enemy, 0)
   setX(Enemy, 60)
   updateScore()
 var yy = getY(Enemy2)
 var xx = getX(Enemy2)
 if (yy > 70 || xx < 0) {
   setY(Enemy2, 0)
   setX(Enemy2, 90)
  updateScore()
   var yyy = getY(Enemy3)
   var xxx = getX(Enemy3)
 if (yyy > 70 || xxx < 0) {
   setY(Enemy3, 0)
   setX(Enemy3, 120)
  updateScore()
  var yyyy = getY(Enemy4)
  var xxxx = getX(Enemy4)
if (yyyy > 70 || xxxx < 0) {
  setY(Enemy4, 0)
  setX(Enemy4, 30)
 updateScore()
 var yyyyy = getY(Enemy5)
 var xxxxx = getX(Enemy5)
if (yyyyy > 70 || xxxxx < 0) {
 setY(Enemy5, 0)
 setX(Enemy5, 10)
updateScore()
var yyyyyy = getY(Enemy6)
var xxxxxx = getX(Enemy6)
if (yyyyyy > 70 || xxxxxx < 0) {
setY(Enemy6, 0)
setX(Enemy6, 150)
updateScore()
var yyyyyyy = getY(Enemy7)
var xxxxxxx = getX(Enemy7)
if (yyyyyyy > 70 || xxxxxxx < 0) {
setY(Enemy7, 0)
setX(Enemy7, 170)
updateScore()
  }
}
 }
 }
 }
 }
 }
 requestAnimationFrame(animate1)
}

addEventListener("keydown", animate)
function animate(event) {
var xxxxxxxx = getX(Player)
var yyyyyyyy = getY(Player)
  if(event.key == "ArrowRight" && xxxxxxxx < 170) {
    move(Player, 5, 0)
  } else if (xxxxxxxx > 300) {
        setX(Player, 0)
  } else if(event.key == "ArrowUp" && yyyyyyyy > 0) {
    move(Player, 0, -5)
  } else if(event.key == "ArrowDown" && yyyyyyyy < 85) {
    move(Player, 0, 5)
  } else if(event.key == "ArrowLeft" && xxxxxxxx > 10) {
    move(Player, -5, 0)
  } else if (collides(Player, Enemy)) {
    setX(Player, 90)
    setY(Player, 50)
    resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy2)) {
      setX(Player, 90)
      setY(Player, 50)
      resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy3)) {
      setX(Player, 90)
      setY(Player, 50)
        resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy4)) {
      setX(Player, 90)
      setY(Player, 50)
        resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy5)) {
      setX(Player, 90)
      setY(Player, 50)
      resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy6)) {
      setX(Player, 90)
      setY(Player, 50)
        resetScore()
      alert("Game Over!")
      Reset (form)
    } else if (collides(Player, Enemy7)) {
      setX(Player, 90)
      setY(Player, 50)
        resetScore()
      alert("Game Over!")
      Reset(form)
  }
requestAnimationFrame(animate)
}

// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
