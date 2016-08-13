/**
 * yeoman-project-r
 *
 * Copyright © 2016 RyzhkovaL. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Greeting {

  constructor(name) {
    this.name = name || 'Gast';
  }

  hello() {
    return `Welkom, ${this.name}!`;
  }

}

export default Greeting;
