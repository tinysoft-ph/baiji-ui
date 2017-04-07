/*
 *
 * SitesView actions
 *
 */

 import {
   LOAD_SITE,
 } from './constants';

 export function defaultAction(id) {
   return {
     type: LOAD_SITE,
     id,
   };
 }
