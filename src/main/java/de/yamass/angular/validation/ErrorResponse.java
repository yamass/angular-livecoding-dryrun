package de.yamass.angular.validation;

/**
 * Revision: $Revision$
 */
public class ErrorResponse {

   private String message;

   public ErrorResponse() {
   }

   public ErrorResponse(String message) {
      this.message = message;
   }

   public String getMessage() {
      return message;
   }
}
