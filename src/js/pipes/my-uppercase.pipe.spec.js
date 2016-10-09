System.register(['./my-uppercase.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var my_uppercase_pipe_1;
    return {
        setters:[
            function (my_uppercase_pipe_1_1) {
                my_uppercase_pipe_1 = my_uppercase_pipe_1_1;
            }],
        execute: function() {
            describe('MyUppercasePipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new my_uppercase_pipe_1.MyUppercasePipe();
                });
                it('transforms "abc" to "ABC"', function () {
                    expect(pipe.transform('abc')).toEqual('ABC');
                });
                it('transforms "abc def" to "ABC DEF"', function () {
                    expect(pipe.transform('abc def')).toEqual('ABC DEF');
                });
                it('leaves "ABC DEF" unchanged', function () {
                    expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktdXBwZXJjYXNlLnBpcGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LXVwcGVyY2FzZS5waXBlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztZQUVBLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEIsSUFBSSxJQUFxQixDQUFDO2dCQUMxQixVQUFVLENBQUM7b0JBQ1AsSUFBSSxHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXlVcHBlcmNhc2VQaXBlIH0gZnJvbSAnLi9teS11cHBlcmNhc2UucGlwZSc7XG5cbmRlc2NyaWJlKCdNeVVwcGVyY2FzZVBpcGUnLCAoKSA9PiB7XG4gICAgbGV0IHBpcGU6IE15VXBwZXJjYXNlUGlwZTtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgcGlwZSA9IG5ldyBNeVVwcGVyY2FzZVBpcGUoKTtcbiAgICB9KTtcbiAgICBpdCgndHJhbnNmb3JtcyBcImFiY1wiIHRvIFwiQUJDXCInLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChwaXBlLnRyYW5zZm9ybSgnYWJjJykpLnRvRXF1YWwoJ0FCQycpO1xuICAgIH0pO1xuICAgIGl0KCd0cmFuc2Zvcm1zIFwiYWJjIGRlZlwiIHRvIFwiQUJDIERFRlwiJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QocGlwZS50cmFuc2Zvcm0oJ2FiYyBkZWYnKSkudG9FcXVhbCgnQUJDIERFRicpO1xuICAgIH0pO1xuICAgIGl0KCdsZWF2ZXMgXCJBQkMgREVGXCIgdW5jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QocGlwZS50cmFuc2Zvcm0oJ0FCQyBERUYnKSkudG9FcXVhbCgnQUJDIERFRicpO1xuICAgIH0pO1xufSk7XG4iXX0=