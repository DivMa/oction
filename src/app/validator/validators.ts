import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from "rxjs";
/**
 * Created by Administrator on 2017/11/30 0030.
 */
export function positiveNumberValidator(control: FormControl): any {
  if (!control.value) {
    return null;
  }
  const price = control.value;
  if (price > 0) {
    return null;
  }else {
    return {number: {desc: '数字格式不正确'}};
  }
}
export function mobileValidator(control: FormControl): any {
  const regex = /^1[3|4|5|7|8]\d{9}$/;
  const valid = regex.test(control.value);
  //return valid ? null : {mobile : true};
  return valid ? null : {mobile : {desc: '手机号格式不正确'}};
}
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid: boolean = password.value === pconfirm.value;
  //return valid ? null : {equal : true};
  return valid ? null : {equal : {desc: '密码和确认密码不匹配'}};
}
export function mobileAsyncValidator(control: FormControl): any {
  const regex = /^1[3|4|5|7|8]\d{9}$/;
  const valid = regex.test(control.value);
  //return valid ? null : {mobile : true};
  return Observable.of(valid ? null : {mobile : {desc: '手机号格式不正确'}}).delay(2000);
}

