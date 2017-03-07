import React, {Component} from 'react';


export default class New extends Component {
    render() {
        return (
          <div className="row">
              <form className="col s12">
                  <h3>Add a new player</h3>

                  <div className="row">
                      <div className="input-field col s6">
                          <input placeholder="Name" ref="name" type="text" className="validate"/>
                      </div>
                      <div className="input-field col s6">
                          <input placeholder="Team" ref="team" type="text" className="validate"/>
                      </div>
                  </div>

                  <div className="row">
                      <div className="input-field col s6">
                          <h5>Ball Manipulation</h5>
                          <select className="browser-default" ref="ballManipulation">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                      <div className="input-field col s6">
                          <h5>Kicking Abilities</h5>
                          <select className="browser-default" ref="kickingAbilities">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                  </div>

                  <div className="row">
                      <div className="input-field col s6">
                          <h5>passingAbilities</h5>
                          <select className="browser-default" ref="passingAbilities">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                      <div className="input-field col s6">
                          <h5>duelTackling</h5>
                          <select className="browser-default" ref="duelTackling">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                  </div>

                  <div className="row">
                      <div className="input-field col s6">
                          <h5>fieldCoverage</h5>
                          <select className="browser-default" ref="fieldCoverage">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                      <div className="input-field col s6">
                          <h5>blockingAbilities</h5>
                          <select className="browser-default" ref="blockingAbilities">
                              <option value="0">0 - Hasn't demonstrated skill</option>
                              <option value="1">1 - Needs improvement</option>
                              <option value="2">2 - Skill acquired</option>
                              <option value="3">3 - Mastered</option>
                          </select>
                      </div>
                  </div>

                <div className="row">
                    <div className="input-field col s6">
                        <h5>gameStrategy</h5>
                        <select className="browser-default" ref="gameStrategy">
                            <option value="0">0 - Hasn't demonstrated skill</option>
                            <option value="1">1 - Needs improvement</option>
                            <option value="2">2 - Skill acquired</option>
                            <option value="3">3 - Mastered</option>
                        </select>
                    </div>
                    <div className="input-field col s6">
                        <h5>playmakingRisks</h5>
                        <select className="browser-default" ref="playmakingRisks">
                            <option value="0">0 - Hasn't demonstrated skill</option>
                            <option value="1">1 - Needs improvement</option>
                            <option value="2">2 - Skill acquired</option>
                            <option value="3">3 - Mastered</option>
                        </select>
                    </div>
                </div>

                  <div className="row">
                      <div className="input-field col s6">
                          <textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea"/>
                      </div>
                      <div className="input-field col s6">
                          <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
                      </div>
                  </div>

              </form>
          </div>
        )
    }
}
