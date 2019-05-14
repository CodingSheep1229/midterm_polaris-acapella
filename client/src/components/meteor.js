import React, { Component } from 'react';
import $ from 'jquery';
import './components.css';

class Meteor extends Component {
    constructor(props) {
        super(props);
        this.ShootingStar = function() {
            this.n = 0;
            this.m = 0;
            this.defaultOptions = {
                velocity: 8,
                starSize: 10,
                life: 300,
                beamSize: 400,
                dir: -1
            };
            this.options = {};

            this.wW = $('body').innerWidth();
            this.hW = $('body').innerHeight();
        };
        this.ShootingStar.prototype.addBeamPart = function(x, y) {
            this.n++;
            var name = this.getRandom(100, 1);
            $("#star" + name).remove();
            $(this.capa).append("<div id='star" + name + "'></div>");
            $("#star" + name).append("<div id='haz" + this.n + "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" + this.options.starSize + "px'>·</div>");
            if (this.n > 1) $("#haz" + (this.n - 1)).css({
              color: "rgba(255,255,255,0.5)"
            });
            $("#haz" + this.n).css({
              top: y + this.n,
              left: x + (this.n * this.options.dir)
            });
        }
        this.ShootingStar.prototype.delTrozoHaz = function() {
            this.m++;
            $("#haz" + this.m).animate({
              opacity: 0
            }, 75);
            if (this.m >= this.options.beamSize) {
              $("#ShootingStarParams").fadeOut("slow");
            }
        }
        this.ShootingStar.prototype.getRandom = function(max, min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.ShootingStar.prototype.launchStar = function(options) {

            this.options = $.extend({}, this.defaultOptions, options);
            this.n = 0;
            this.m = 0;
            var i = 0,
              l = this.options.beamSize,
              x = this.getRandom(this.wW - this.options.beamSize - 100, 100),
              y = this.getRandom(this.hW - this.options.beamSize - 100, 100),
              self = this;
            for (; i < l; i++) {
              setTimeout(function() {
                self.addBeamPart(x, y);
              }, self.options.life + (i * self.options.velocity));
            }
            for (i = 0; i < l; i++) {
              setTimeout(function() {
                self.delTrozoHaz()
              }, self.options.beamSize + (i * self.options.velocity));
            }
            $("#ShootingStarParams").html("Launching shooting star. PARAMS: wW: " + this.wW + " - hW: " + this.hW + " - life: " + this.options.life + " - beamSize: " + this.options.beamSize + " - velocity: " + this.options.velocity);
            $("#ShootingStarParams").fadeIn("slow");
        }
        
        this.ShootingStar.prototype.launch = function(everyTime) {
            if (everyTime !== "number") {
              everyTime = 10;
            }
            everyTime = everyTime * 100;
            this.launchStar();
            var self = this;
            setInterval(function() {
              var options = {
                dir: (self.getRandom(1, 0)) ? 1 : -1,
                life: self.getRandom(400, 100),
                // life: 500,
                beamSize: self.getRandom(700, 400),
                // beamSize: 10000,
                velocity: self.getRandom(10, 4)
                // velocity:4
              }
              self.launchStar(options);
            }, everyTime);
        }
    }
    componentDidMount() {
        var shootingStarObj = new this.ShootingStar();
        shootingStarObj.launch();
    }

    render() {
        return(
            <div id="layout" className="stars">
            <div id='ShootingStarParams'></div>
            </div>
        );
    }
}

export default Meteor;