/*
 *
 * SitesView actions
 *
 */

 import {
   LOAD_SITE,
   SITE_VIEW_LOAD_SUCCESS,
 } from './constants';

 export function loadSite(id) {
   return {
     type: LOAD_SITE,
     id,
   };
 }

 export function loadSiteViewSuccess(view) {
   return {
     type: SITE_VIEW_LOAD_SUCCESS,
     view,
   };
 }
