import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * Remover sin usar jQuery elemntos dinamicos
   * creados con bootstrap sin usar bootstrap
   * @param className string para remover 
   */
  public remove(className: string) {
    const elements = document.getElementsByClassName(className) as any || [];

    if (elements.length > 0) {
      elements.forEach(function (element: any) {
        if (!element.innerHTML) { element.remove(); }
      });
    }
  }
}
