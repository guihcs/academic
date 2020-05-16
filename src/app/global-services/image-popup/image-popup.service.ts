import {Injectable, Injector} from '@angular/core';
import {ConnectionPositionPair, Overlay, OverlayConfig, OverlayPositionBuilder, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {ImageViewerComponent} from '../../templates/image-viewer/image-viewer.component';


@Injectable({
  providedIn: 'root'
})
export class ImagePopupService {

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {
    this.overlayRef = this.overlay.create({});
  }


  open(origin, image){
    let imagePortal = new ComponentPortal(ImageViewerComponent);

    let positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(origin.elementRef)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    let imageViewRef = this.overlayRef.attach(imagePortal);
    imageViewRef.instance.setImage(image);
    this.overlayRef.updatePositionStrategy(positionStrategy);
  }

  close(){
    this.overlayRef.detach();
  }



}


