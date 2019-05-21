import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from "@ionic-native/core";

/*
  Generated class for the SignalStengthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Plugin({
  pluginName: 'SignalStrength',
  plugin: 'cordova-aspolar-plugin-signal-strength',
  pluginRef: 'window.plugins.signalStrength',
  repo: 'https://github.com/JVasconsueloM/aspolar-signal-strength',
  platforms: ['Android']
})

@Injectable()
export class SignalStrengthProvider extends IonicNativePlugin  {

  @Cordova()
  getdBm(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getPercentage(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getLevel(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
