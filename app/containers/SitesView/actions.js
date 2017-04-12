/*
 *
 * SitesView actions
 *
 */

 import {
   LOAD_SITE,
 } from './constants';

 export function loadSite(id) {
   return {
     type: LOAD_SITE,
     id,
   };
 }
