package de.yamass.angular.validation;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ValidationExceptionHandler extends ResponseEntityExceptionHandler {

   @ExceptionHandler({ MyValidationException.class })
   public ResponseEntity<Object> handleInvalidRequest(MyValidationException e, WebRequest request) {

      HttpHeaders headers = new HttpHeaders();
      headers.setContentType(MediaType.APPLICATION_JSON);

      return handleExceptionInternal(e, new ErrorResponse(e.getMessage()), headers, HttpStatus.UNPROCESSABLE_ENTITY, request);
   }

}
