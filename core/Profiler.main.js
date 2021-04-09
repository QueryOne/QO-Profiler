/*
  Pseudo workflow
   - Trigger dialog open
   - Close dialog
   - Create profile
   - Select default profile
   - Select defaults without profile
   - Delete profile
   - Duplicate profile
   - Test profile parameters
   - Manage shared modules
   
Profiles
 >> Default Profile
 > Options
 > Remote
 > Modules
 > Scripts
Manual

if no default profile, generate one and mark it as default
if default profile available, use it
if no default profile but profiles are available, use the first one

 */

Profiler = (function(Profiler) {
  let profiles = []
  
  let prototype = {}
      prototype.options = {}
      prototype.modules = []
      prototype.remote  = {}
      prototype.scripts = {}
      
  let begin = function() {
    
  }


  return Profiler
})(typeof Profiler != 'undefined' ? Profiler : {})
