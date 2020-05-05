//
//  MainViewController.swift
//  ErnRunner
//
//  Created by Andrew Smith on 5/5/20.
//  Copyright © 2020 Walmart. All rights reserved.
//

import Foundation
import UIKit
import ElectrodeContainer

class MainViewController:UIViewController {
    let thankYouButton = UIButton()
    let movieButton = UIButton()

    override func viewDidLoad() {
        super.viewDidLoad()
        registerNavigation()

        thankYouButton.setTitle("Thank You MiniApp", for: .normal)
        thankYouButton.frame = CGRect(x: 50, y: 150, width: 300, height: 50)
        thankYouButton.setTitleColor(.black, for: .normal)
        self.view.addSubview(thankYouButton)
        thankYouButton.addTarget(self, action: #selector(thankYouButtonPressed(_:)), for: .touchUpInside)
        
        movieButton.setTitle("Movie MiniApp", for: .normal)
               movieButton.frame = CGRect(x: 50, y: 300, width: 300, height: 50)
               movieButton.setTitleColor(.black, for: .normal)
               self.view.addSubview(movieButton)
               movieButton.addTarget(self, action: #selector(movieButtonPressed(_:)), for: .touchUpInside)
        
//        let rnView = ElectrodeReactNative.sharedInstance().miniAppView(withName: "ErnDynatraceMiniApp", properties: nil, sizeFlexibility: 2, delegate: nil)
//        self.view.addSubview(rnView)
//        rnView.frame = CGRect(x: 0, y: 400, width: UIScreen.main.bounds.width, height: 50)
    }
    
    private func registerNavigation()
    {
        NavigationAPI().requests.registerNavigateRequestHandler(handler: {(_ data: Any?, _ block: ElectrodeBridgeResponseCompletionHandler) -> Void in
            NSLog(String(describing: data))
            self.navigationController?.popViewController(animated: true)
            block(data, nil)
        })
    }

    @objc func thankYouButtonPressed(_ sender: UIButton) {
//        let vc = ElectrodeReactNative.sharedInstance().miniApp(withName: "ThankYouMiniApp", properties: nil)
        let vc = ViewController()
//        vc.finish = { payload in
//            NSLog(payload)
//        }
        present(vc, animated: true, completion: nil)
    }

    @objc func movieButtonPressed(_ sender: UIButton) {
        let vc = ElectrodeReactNative.sharedInstance().miniApp(withName: "MovieListMiniApp", properties: nil)
        present(vc, animated: true, completion: nil)
    }
    
}
