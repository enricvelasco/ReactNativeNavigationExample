//
//  InterfaceController.swift
//  AppleWatch WatchKit Extension
//
//  Created by Enric Velasco on 3/1/22.
//

import WatchKit
import Foundation
import WatchConnectivity

class InterfaceController: WKInterfaceController, WCSessionDelegate {

  @IBOutlet weak var firstLabel: WKInterfaceLabel!
  
  
  var session: WCSession?

    // Initializes the interface controller with the specified context data
    override func awake(withContext context: Any?) {
      super.awake(withContext: context)
      if WCSession.isSupported() {
        self.session = WCSession.default
        self.session?.delegate = self
        self.session?.activate()
      }
    }

    // Called when the activation of a session finishes
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}

    // Called when an immediate message arrives
    func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
      print("watch received message", message);
      let text = message["message"] as? String
      self.firstLabel.setText(text)
    }

}
